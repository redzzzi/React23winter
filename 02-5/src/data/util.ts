//가짜데이터를만드는함수정의하기
export const makeArray = (length: number) => new Array(length).fill(null)
export const range = (min: number, max: number): number[] =>
	makeArray(max - min).map((notUsed, index) => index + min)
export const random = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min)) + min