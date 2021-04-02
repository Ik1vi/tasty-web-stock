import { PUBLICATIONS_REQUESTED } from "../constants/action-types";

export function getPublications() {
    return { type: PUBLICATIONS_REQUESTED };
}

// export function getPublications() {
//     return function (dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: PUBLICATIONS_REQUESTED, publications: json });
//             });
//     };
// }


// const getPublications = (page, color) => {
//     setLoading(true);

//     let params = {
//         query: 'programming electronic tech javascript laptop html',
//         per_page: 10,
//         page: page
//     }

//     props.unsplash.search.photos(params.query, params.page, params.per_page, color ? { color: color } : {})
//         .then(toJson)
//         .then(res => {
//             if (res.errors) {
//                 setError(res.errors[0]);
//                 setLoading(false);
//             } else {
//                 const feed = res;
//                 const { total, results } = feed;

//                 setPublications([...publications, ...results]);
//                 setTotalPages(total)
//                 setLoading(false);
//             }
//         });
// }
