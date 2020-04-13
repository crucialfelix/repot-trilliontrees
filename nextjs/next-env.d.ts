/// <reference types="next" />
/// <reference types="next/types/global" />

// Some older libraries still depend on Typescript to supply a "GlobalFetch" object
// which is where "fetch" is to be found.
// In the browser that is window, on the server that is WorkerGlobalScope.
// So alias GlobalFetch to this scope:
declare type GlobalFetch = WindowOrWorkerGlobalScope;
