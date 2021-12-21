export const sortArray = (reposArray) => {
   return reposArray.sort((a,b) => {
       if (new Date(a.created_at) > new Date(b.created_at)) {
           return 1
       } else if (new Date(a.created_at) < new Date(b.created_at)) {
        return -1
       } else {
           return 0
       }
   })
}

export const modifyRepoArray = (repoArray, watchlist) => {
    return repoArray.map(item => {
        return {
            ...item,
            isSubscribed: watchlist.includes(item.id)
        }
    })
}