import React, {useState} from "react";
import API from "./API";
import "./lesson_3";
import {log} from "util";

const Lesson3 = () => {
    const [searchName, setSearchName] = useState("");
    const [serachResult, setSerachResult] = useState("");
    const [searchNameByType, setSearchNameByType] = useState("");
    const [serachResultByType, setSerachResultByType] = useState("");

    // const searchFilm = async () => {
    //     await API.searchFilmsByTitle(searchName)
    //         .then(({data}) => {
    //             if (data.Response === "True") {
    //                 setSerachResult(JSON.stringify(data.Search))
    //             } else {
    //                 setSerachResult(data.Error)
    //             }
    //         })
    // };
    const searchFilm = async () => {
        // const result  =  await API.searchFilmsByTitle(searchName);
        // console.log(result);
        try {
            const { data } =  await API.searchFilmsByTitle(searchName);
            const { Response, Search, Error} = data;
            Response === 'True'
                ? setSerachResult(JSON.stringify(Search))
                : setSerachResult(Error);
        } catch (e) {

        }
    };


    // const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //     const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : "";
    //     let promise2 = await API.searchFilmsByType(searchNameByType, type)
    //     setSerachResultByType(JSON.stringify(promise2.data))
    // }
    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type);
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;


//example async/await
// const wait = (ms: number) => {
// return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve()
//     }, ms)
// })
// }
//
// async function counter() {
//     await wait(1000);
//     console.log(1);
//     await wait(1000);
//     console.log(2);
//     await wait(1000);
//     console.log(3)
// }
//
// counter()