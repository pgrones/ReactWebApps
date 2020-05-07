import React from "react";

type Props = {
    page: number,
    totalPages: number,
    setPage: Function
}

export const Pagination = ({totalPages, page, setPage}: Props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}>
            <button style={{width: 40, height: 40, marginLeft: 400}} disabled={page === 1} onClick={() => setPage(page - 1)} id={'prev'}>
                {'<'}
            </button>
            <span style={{fontSize: 30, fontFamily: 'Arial', marginLeft: 100, marginRight: 100}} id={'page'}>
                {page + ' / ' + totalPages}
            </span>
            <button style={{width: 40, height: 40, marginRight: 400}} disabled={page === totalPages} onClick={() => setPage(page + 1)} id={'next'}>
                {'>'}
            </button>
        </div>
    )
};
