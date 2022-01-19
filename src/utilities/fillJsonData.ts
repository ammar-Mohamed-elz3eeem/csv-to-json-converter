interface Data {
    first_name: string,
    last_name: string,
    phone: string
}
function fillJson(jsonObj: Array<Data>): Array<Data> {
    jsonObj.forEach((obj: Data, index: number, arr: Array<Data>) => {
        if (obj.phone === "") {
            jsonObj[index].phone = "missing data";
        }
    })
    return jsonObj
}

export default fillJson