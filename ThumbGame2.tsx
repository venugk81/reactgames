import { log } from "util";
import { Cell } from "./Cell"
import { useState } from "react";
// https://medium.com/@TheRealScoop/how-to-loop-inside-of-react-jsx-tsx-1a95aa8ccdee

export function ThumbGame2() {
    const nums1 = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    ]

    // const numbersClicked: number[] = [];
    const [selectedNums, getSelectedNums] = useState<number[]>([]);

    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const buildUI = () => {
        for (let i = 0; i < nums1.length; i++) {
            <Cell val={i} />
        }
    }

    const buildBoxes = () => {
        return nums1.map((arr) => {
            return arr.map((num) => {
                return <Cell val={num} />
            })
        })
    }

    const parentDiv = () => {
        // for(let i=0; i<nums1.length; i++){
        //     return childDiv(nums1[i]);
        // }

        return nums1.map((num) => {
            childDiv(num);
        })

    }

    const childDiv = (arrX: number[]) => {
        // for (let i = 0;  i< arrX.length; i++) {
        //     return <Cell val={i} />
        // }

        return arrX.map((num) => {
            return <Cell val={num} />

        })
    }

    const getButtonsUsingMap = () => {
        const array = [1, 2, 3, 4, 5]

        return array.map((number) => {
            return <div className="board-row" >{number}</div>
        })
    }

    const numbersRevealed = (num: number) => {
        if (selectedNums.indexOf(num) >= 0) {
            return;
        }
        getSelectedNums(f => [...selectedNums, num]);
        console.log(selectedNums);
        if (selectedNums.includes(num)) {
            alert("Testing: " + num);
        }
    }

    return (
        <div className="board-container">
            {
                nums1.map((ar, ind1) => <div>
                    {
                        <div className="board-row">
                            {
                                ar.map((item, ind2) =>
                                    <div
                                        className="square1"
                                        onClick={() => numbersRevealed(item)}
                                        id={item.toString()}
                                        key={ind2}
                                    >
                                        {selectedNums.includes(item) ? item : null}
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>)
            }
        </div>
    )
}