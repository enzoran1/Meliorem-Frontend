
  /**
 * 
 * @param {*} actualPage 
 * @param {*} maxPage 
 * @param {*} range 
 * @example paginations(4, 10, 2) => [1, 2, 3, 4, 5, 6, "...", 10]
 * @example paginations(1, 10, 2) => [1, 2, 3,"...", 10]
 * @example paginations(5, 10, 2) => [1, 2, 3, 4, 5, 6, 7,"...", 10]
 * @example paginations(7, 63, 2) => [1, "...", 5, 6, 7, 8, 9,"...", 63]
 * @example paginations(59, 63, 2) => [1, "...", 57, 58, 59, 60, 61, 62, 63]
 * @example paginations(60, 63, 2) => [1, "...", 58, 59, 60, 61, 62, 63]
 * @example paginations(58, 63, 2) => [1, "...", 56, 57, 58, 59, 60, "...", 63]
 * @returns 
 */
export default function paginations(actualPage, maxPage, range) {
    let pagination = [];
    let start = actualPage - range;
    let end = actualPage + range;
    // start pagination
    if (start === 2 || start === 3) {
        pagination.push(1);
        if (start === 3)
            pagination.push(2);
    }
    else if (start > 3) {
        pagination.push(1);
        pagination.push("...");
    }
    if (start < 1) start = 1;
    // body pagination
    for (let i = start; i <= end; i++)
        if (i > 0 && i <= maxPage)
            pagination.push(i);
    // end pagination
    if (end > maxPage) end = maxPage;
    if (end >= maxPage-2) {
        if (end === maxPage-2)
            pagination.push(maxPage-1);
        pagination.push(maxPage);
    }
    else{
        pagination.push("...");
        pagination.push(maxPage);
    }
    return pagination;
}