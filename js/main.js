var ClickRpg = {

    player: {
        woodcutting: {
            totalXp: 0,
            level: 1
        },
        firemaking: {
            totalXp: 0,
            level: 1
        }
    },
    checkLvl: function(skillXp, skillLvl, skillName){
        var xpVal = skillXp;
        var lvl = skillLvl;

        switch(true){
            case xpVal >= 0 && xpVal <= 999:
                lvl = 1;
                break;
            case xpVal >= 1000 && xpVal <= 1999:
                lvl = 2;
                break;
            case xpVal >= 2000 && xpVal <= 3999:
                lvl = 3;
                break;
            case xpVal >= 4000 && xpVal <= 6999:
                lvl = 4;
                break;
            default:
                console.log("xp too high for level");
                break;
        }

        if(skillName === "woodcutting") {
            ClickRpg.player.woodcutting.level = lvl;
        } else if( skillName === "firemaking") {
            ClickRpg.player.firemaking.level = lvl;
        }
    }
}

var handlers = {
    init: function(){
        view.setUpEventListeners();
        handlers.update();
    },
    addXp: function(skillName){
        switch(skillName){
            case "woodcutting":
                ClickRpg.player.woodcutting.totalXp += 600;
                break;
            case "firemaking":
                ClickRpg.player.firemaking.totalXp += 700;
                break;
            default:
                console.log("ERROR: addxp not working");
                break;
        }
        
        handlers.update();
    },
    update: function(){
        let wcXp = ClickRpg.player.woodcutting.totalXp;
        let wcLvl = ClickRpg.player.woodcutting.level;
        let fmXp = ClickRpg.player.firemaking.totalXp;
        let fmLvl = ClickRpg.player.firemaking.level;

        ClickRpg.checkLvl(wcXp, wcLvl, "woodcutting");
        ClickRpg.checkLvl(fmXp, fmLvl, "firemaking");

        wcXp = ClickRpg.player.woodcutting.totalXp;
        wcLvl = ClickRpg.player.woodcutting.level;
        fmXp = ClickRpg.player.firemaking.totalXp;
        fmLvl = ClickRpg.player.firemaking.level;

        view.render(wcXp, wcLvl, fmXp, fmLvl);
    }
}

var view = {

    wcXpLabel: document.querySelector(".label_wcXp"),
    wcLvlLabel: document.querySelector(".label_wcLevel"),
    fmXpLabel: document.querySelector(".label_fmXp"),
    fmLvlLabel: document.querySelector(".label_fmLevel"),

    setUpEventListeners: function(){

        document.querySelector("body").addEventListener("click", function(event){
            var elementClicked = event.target;
            switch(elementClicked.className){
                case "btn btn_addWcXp":
                    handlers.addXp("woodcutting");
                    break;
                case "btn btn_addFmXp":
                    handlers.addXp("firemaking");
                    break;
                default:
                    console.log("ERROR: event listener not working");
                    break;
            } 
        });
    },
    render: function(wcXp, wcLvl, fmXp, fmLvl){ 
        view.wcXpLabel.innerHTML = wcXp;
        view.wcLvlLabel.innerHTML = wcLvl;
        view.fmXpLabel.innerHTML = fmXp;
        view.fmLvlLabel.innerHTML = fmLvl;
    }

}

handlers.init();
console.log(view.xpBtns);
console.log(view.xpLabels);