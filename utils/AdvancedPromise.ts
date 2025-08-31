import { auth } from "@clerk/nextjs/server";

type Response<TResult> =
  | { ok: true; result: TResult; message?: string } // result is required
  | { ok: false; result?: TResult; message: string }; // message is required

type SafeHandler<TResult> = (handlers: {
  resolve: (result: TResult) => void;
  reject: (message: string) => void;
}) => PromiseLike<void>;

export const SafePromise = <TResult>(handler: SafeHandler<TResult>) =>
  new Promise<Response<TResult>>(async (fallback) => {
    try {
      const resolve = (result: TResult) => fallback({ ok: true, result });
      const reject = (message: string) => fallback({ ok: false, message });
      await handler({ resolve, reject });
    } catch ({ message }: any) {
      fallback({ ok: false, message });
    }
  });

type ProtectedHandler<TResult> = (
  handlers: {
    resolve: (result: TResult) => void;
    reject: (message: string) => void;
  },
  session: Awaited<ReturnType<typeof auth>>
) => PromiseLike<void>;

export const ProtectedPromise = <TResult>(handler: ProtectedHandler<TResult>) =>
  new Promise<Response<TResult>>(async (fallback) => {
    try {
      const resolve = (result: TResult) => fallback({ ok: true, result });
      const reject = (message: string) => fallback({ ok: false, message });
      const session = await auth();
      if (!session.isAuthenticated) {
        return reject("Unauthorized");
      }
      await handler({ resolve, reject }, session);
    } catch ({ message }: any) {
      fallback({ ok: false, message });
    }
  });
