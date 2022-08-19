function getAllGroups() {
    fetch("")
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
