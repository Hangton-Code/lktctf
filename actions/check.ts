"use server";

const answers: { [key: string]: string[] } = {
  "game-0": ["$1", "1"],
  "gpt-4o": ["1/5", "0.2"],
  song: ["i-love-lkt"],
  source: [
    "OcWwfDAUdlUaZloiEbg4VxMLOinp02Oj6CcItzim0w2Ltj70cbwQStgmwgkr6QbEh9bDrzZ7cHtIhqFTvUrZ5iFmAFAY0AEnrLmgA1TFrQRiuNNYAbUsDO4gMkZod8cq7xg2THvRmuSSp6DNThJf6NUy1HAi0sJkjzOGqsyc3SmHVwYUzXWy2qICtNf5296jC6LtKQe8mpQz9qDwtAti3row9wEwcqJl9hdyxu2hxbLCfA2XuTo4RuYL0NwvONdTFHR64mdt0CYFoVnTIYOJXg3pYLRuvrwXOgT8aOulFfetwbIzlgEwR8DgHJMTLsSqZ3xkLSHiTAEAEdCzb2caeJtz5KUclP1fDdmmsN4doKscal0Fad5QyIITi9vplei6PRODkrJm8kKUsUPJI4ldmuBi4CbBVEejr5Id3q7DSS0zknerZciLEcDG6yrCdGEvgMtKtXmRkYYAJ9ax0xovXpmheIXWIJEqERNnVeu6VUqXaGxwpmFUMwh8cgAk2ITbi3aX9nSpNyR9CSD5v2tZd6c1eRkh7yyxw1BgwM23vhHbELAOTKJQ2VPMDgF99T00IM941e2rv2twU47qHU4hIggF4egx9OhidTWtg6GJ4Vj0T2LyxeRq0Y50W0W42EG7",
  ],
  desktop: ["mr-yeung-is-handsome"],
};

const secrets: { [key: string]: string } = {
  "game-0": "Correct! 請到小賣部飲品自動售賣機自拍一張",
  "gpt-4o":
    "Correct! 請到地下ICT Society Board自拍一張\nAnyway, please don't ever try using chatgpt for doing your homework❗This is a 反面教材❗",
  song: "Correct! 請到209電腦室自拍一張",
  source: "Correct! 請到禮堂自拍一張",
  desktop: "Correct! 請到任何一家課室和時鐘自拍一張",
};

export async function check(id: string, key: string) {
  if (!answers[id])
    return {
      success: false,
      message: "no id found.",
    };

  if (answers[id].includes(key)) {
    return {
      success: true,
      message: secrets[id],
    };
  }

  return {
    success: false,
    message: "Incorrect key!!!!!",
  };
}
