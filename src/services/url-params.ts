export const getParams = (names: string[]) => {
    const params = new URLSearchParams(window.location.search);
    const res: any = {}
    for (let i = 0; i < names.length; i++) {
        const val = params.get(names[i]);
        res[names[i]] = val ? val : ''
    }
    return res
};

export const setParams = (filters: any) => {
    const params = new URLSearchParams()
    for (let filter in filters) {
        if (filters[filter] !== "") {
            params.append(filter, filters[filter])
        }else{
            params.delete(filter)
        }
    }
    return params
}