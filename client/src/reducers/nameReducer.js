export default function (state = {name: "Zhenya"}, action) {
    switch (action.type) {
        case "CHANGE_NAME":
            state = {name: action.payload}
    }

    return state;
}