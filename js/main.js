var ClickRpg = {

    xp: 0,
    level: 1,
    grantXp: function(xpAmt) {
        if (xpAmt.type === number) {
            ClickRpg.xp += xpAmt;
        } else {
            console.log(xpAmt + " is not a number");
        }
    },
    checkLevel: function() {
        if(ClickRpg.xp >= 100 && ClickRpg.xp < 200) {
            ClickRpg.level = 2;
        }
    }
}