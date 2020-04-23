import {action, observable} from "mobx";

export class Store {
    @observable loading: boolean;
    @observable gifs: { title: string, url: string }[];
    @observable currentPage: number;
    @observable totalPages: number;
    @observable screen: string;
    @observable searchString: string;

    constructor() {
        this.searchString = '';
        this.loading = false;
        this.gifs = [];
        this.currentPage = 0;
        this.totalPages = 0;
        this.screen = 'Trending'
    }

    @action fetchTrending(): void {
        this.fetch(false);
    }

    @action fetchSearch(): void {
        this.fetch(true);
    }

    fetch(search: boolean): void {
        let url = '';
        if (search) {
            url = `https://api.giphy.com/v1/gifs/search?api_key=kn71mgUatXNYkXv8boMUQDeUsF5kgACG&limit=12&offset=${this.currentPage * 12}&q=${this.searchString}`
        } else {
            url = `https://api.giphy.com/v1/gifs/trending?api_key=kn71mgUatXNYkXv8boMUQDeUsF5kgACG&limit=12&offset=${this.currentPage * 12}`
        }

        this.loading = true;
        console.log('fetch');
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);

                this.gifs = json.data.map(item => {
                    return {
                        url: item.images.fixed_height.url,
                        title: item.title
                    }
                });

                this.totalPages = parseInt((json.pagination.total_count / 12).toFixed(0));
                this.loading = false;
            });
    }

    @action setCurrentPage(page: number): void {
        if (this.currentPage !== page && this.totalPages >= page) {
            this.currentPage = page;
            if (this.screen === 'Trending') {
                this.fetchTrending();
            } else {
                this.fetchSearch()
            }
        }
    }

    @action setSearchString(input: string): void {
        this.searchString = input;
    }

    @action setScreen(screen: string): void {
        if (this.screen !== screen) {
            this.currentPage = 0;
            this.totalPages = 0;
            this.gifs = [];
            if (screen !== 'Trending') {
                this.screen = 'Search';
            } else {
                this.screen = 'Trending';
                this.fetchTrending();
            }
        }
    }
}
