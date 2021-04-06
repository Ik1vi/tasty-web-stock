import { CLEAR_CURRENT_PUBLICATION, CURRENT_PUBLICATION, CURRENT_PUB_LIKE_EVENT } from "../constants/action-types"

export const setCurrentPublication = (currentPublication) => {
    return {
        type: CURRENT_PUBLICATION,
        currentPublication: currentPublication
    }
}

export const clearCcurrentPublication = () => {
    return { type: CLEAR_CURRENT_PUBLICATION }
}

export const updateLikeState = (likeState, totalLikes) => {
    return { type: CURRENT_PUB_LIKE_EVENT, likeState, totalLikes }
}
