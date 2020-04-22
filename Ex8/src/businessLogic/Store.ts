import {action, observable} from "mobx";

export class Store {
    @observable gifs: { title: string, url: string }[];
    @observable currentPage: number;
    @observable totalPages: number;

    constructor() {
        this.gifs = [];
        this.currentPage = 0;
        this.totalPages = 0;
    }

    @action fetchTrending(): void {
        console.log('fetch');
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=kn71mgUatXNYkXv8boMUQDeUsF5kgACG&limit=9&offset=${this.currentPage * 9}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);

                this.gifs = json.data.map(item => {
                    return {
                        url: item.images.fixed_height.url,
                        title: item.title
                    }
                });

                this.totalPages = parseInt((json.pagination.total_count / 9).toFixed(0));
            });
    }

    @action setCurrentPage(page: number): void {
        this.currentPage = page;

        this.fetchTrending();
    }
}
