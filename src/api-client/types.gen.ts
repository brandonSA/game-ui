// This file is auto-generated by @hey-api/openapi-ts

export type GameConfig = {
    numberOfGames: number;
    gameChoices: Array<('Rock' | 'Paper' | 'Scissors')>;
};

export type GameTurnRequest = {
    turnNumber: number;
    userSelection: 'Rock' | 'Paper' | 'Scissors';
};

export namespace GameTurnRequest {
    export enum userSelection {
        ROCK = 'Rock',
        PAPER = 'Paper',
        SCISSORS = 'Scissors'
    }
}

export type GameTurnResponse = {
    turnNumber: number;
    gameResult: 'Winner' | 'Loser' | 'Tie';
    serverSelection: string;
    userSelection: string;
};

export namespace GameTurnResponse {
    export enum gameResult {
        WINNER = 'Winner',
        LOSER = 'Loser',
        TIE = 'Tie'
    }
}

export type PostTurnData = {
    requestBody: GameTurnRequest;
};

export type PostTurnResponse = (GameTurnResponse);

export type GetConfigResponse = (GameConfig);