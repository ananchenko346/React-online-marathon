function longestLogin(loginList) {
    let login = loginList.reduce((a, b) => a.length > b.length ? a : b);
    return login;
}

longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);
longestLogin(["user1", "user2", "333", "user4", "aa"]);