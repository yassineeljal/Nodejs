function purge<T> (arg:T[]):T{
    return arg[5]
    arg.splice(0,2)
}