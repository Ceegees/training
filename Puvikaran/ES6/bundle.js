/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_js__ = __webpack_require__(2);


let select = document.getElementById("select");
let texts = document.getElementById("texts");
let playerName = [];

select.onchange = function () {

    let val = select.options[select.selectedIndex].value;
    select.disabled = true;

    texts.innerHTML = "";
    for (let i = 1; i <= val; i++) {
        texts.innerHTML += '<div class="form-group"><label class="col-sm-4 control-label">Player ' + i + ':</label><div class="col-sm-6"><input type="text" class="form-control" name="playerName" id="t_' + i + '"/></div></div>';
    }

    $(document).on('keyup', '#t_' + val, function () {

        document.getElementById("buttonArea").innerHTML = '<button class="btn btn-primary" id="shuffleButton">Shuffle</button>';
    });

    $(document).on("click", "#shuffleButton", function (e) {
        e.preventDefault();

        for (let j = 1; j <= val; j++) {
            let name = document.getElementById("t_" + j).value;
            playerName.push(name);
        }

        screenChanger();
        let table = new __WEBPACK_IMPORTED_MODULE_0__Table_js__["a" /* default */]();
        table.joinPlayer();
    });
};

$(document).ready(function () {
    $("#screen-2").hide();
});

function screenChanger() {
    $("#screen-1").hide();
    $("#screen-2").show();
}

/* harmony default export */ __webpack_exports__["default"] = (playerName);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card {
    constructor(value, suite) {
        this.value = value;
        this.suite = suite;
        this.name = suite + '' + value;
    }
    getValue() {

        switch (this.value) {
            case 'J':
                return 11;
                break;
            case 'Q':
                return 12;
                break;
            case 'K':
                return 13;
                break;
            case 'A':
                return 14;
                break;
            default:
                return this.value;
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Deck_js__ = __webpack_require__(4);




let deck = new __WEBPACK_IMPORTED_MODULE_2__Deck_js__["a" /* default */]();
let player = new __WEBPACK_IMPORTED_MODULE_1__Player_js__["a" /* default */]();

class Table {
    constructor() {
        this.players = [];
    }

    joinPlayer() {
        console.log("playerName array", __WEBPACK_IMPORTED_MODULE_0__index_js__["default"]);
        for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__index_js__["default"].length; i++) {
            let joiningPlayer = new __WEBPACK_IMPORTED_MODULE_1__Player_js__["a" /* default */](i, __WEBPACK_IMPORTED_MODULE_0__index_js__["default"][i]);
            this.players.push(joiningPlayer);
        }
        console.log(this.players);

        this.startGame();
    }

    leavePlayer(index, name) {
        let leavingPlayer = name;
        this.players.splice(index, 1);
        console.log("Player " + leavingPlayer + " left the game ");
    }

    startGame() {
        console.log("Game Started");
        let maxPlayers = 6;
        let playersCount = this.players.length;

        if (playersCount <= maxPlayers) {

            deck.makeDeck();
            deck.shuffle();
            console.log("Cards Shuffled");

            let that = this;
            let t = 0;
            let timer = setInterval(function () {
                that.distributeCard();
                t++;
                if (t === 52) {
                    clearInterval(timer);
                }
            }, 2000);
        } else {
            document.getElementById("displayPlayers").innerHTML = '<h3 class="text-danger text-center">Sorry! only ' + maxPlayers + ' Players are allowed</h3>';
            console.log("Sorry! only " + maxPlayers + " are allowed");
        }
    }

    distributeCard() {

        let cardsCount = deck.cards.length;
        let playersCount = this.players.length;
        let sortedPlayers = [];

        let card = deck.removeCard();
        this.players[cardsCount % playersCount].addCard(card);

        console.log("Cards Distributed");
        console.log("Handsvalue of Players");
        for (let i = 0; i < playersCount; i++) {
            let total = this.players[i].handValue();
            console.log('Player: ' + this.players[i].name + ' Handsvalues: ' + total);

            let s = {
                'Player': this.players[i].name,
                'Handsvalues': total,
                'Handcards': this.players[i].hand
            };
            sortedPlayers.push(s);

            // if (total == 0) {
            //     var name = this.players[i].name;
            //     var index = this.players.indexOf(i);
            //     return this.leavePlayer(index, name);
            // }
        }

        console.log("Players sorted in the ascending order of total card values");
        sortedPlayers.sort(function (a, b) {
            return a.Handsvalues - b.Handsvalues;
        });
        sortedPlayers.reverse();

        return displayPlayers(sortedPlayers);
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_js__ = __webpack_require__(1);


class Player {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.hand = [];
    }

    addCard(card) {
        this.hand.push(card);
    }

    removeCard() {

        if (this.hand.length > 0) return this.hand.pop();else return 0;
    }

    handValue() {
        let total = 0;
        let cardValue = 0;
        for (let i = 0; i < this.hand.length; i++) {
            if (this.hand[i] == 0) cardValue = 0;else {
                cardValue = this.hand[i].getValue();
            }
            total = total + parseInt(cardValue);
        }
        return total;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_js__ = __webpack_require__(1);


class Deck {
    constructor() {
        this.cards = [];
    }
    makeDeck() {
        let suite = ['S', 'C', 'H', 'D'];
        let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let i = 0; i < suite.length; i++) {
            for (let j = 0; j < value.length; j++) {

                this.cards.push(new __WEBPACK_IMPORTED_MODULE_0__Card_js__["a" /* default */](value[j], suite[i]));
            }
        }

        return this.cards;
    }

    shuffle() {

        let index, temp, shuffleIndex;

        for (index = this.cards.length - 1; index > 0; index--) {

            shuffleIndex = Math.floor(Math.random() * (index + 1));
            temp = this.cards[index];
            this.cards[index] = this.cards[shuffleIndex];
            this.cards[shuffleIndex] = temp;
        }
        return this.cards;
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard() {
        if (this.cards.length > 0) return this.cards.pop();else return 0;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Deck);

/***/ })
/******/ ]);