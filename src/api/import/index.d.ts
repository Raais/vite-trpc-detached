import * as superjson from 'superjson';
import * as _trpc_server from '@trpc/server';

declare const appRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: any;
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: typeof superjson.default;
}>, {
    users: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: typeof superjson.default;
    }>, {
        getUsers: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: any;
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: any;
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, string>;
        getMe: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: any;
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                user: any;
            } | {
                user: any;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, any>;
        getHello: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: any;
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: any;
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, string>;
        createUser: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: any;
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: any;
            _input_in: {
                name: string;
                age: number;
                email: string;
            };
            _input_out: {
                name: string;
                age: number;
                email: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, string>;
    }>;
}>;
type AppRouter = typeof appRouter;

export type { AppRouter };
