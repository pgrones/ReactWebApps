export type Theme = {
    background: string;
    notificationColor: string;
    text: string;
    accentBetween: string;
    accent: string
}


export const darkTheme: Theme = {
    background: '#4e5663',
    accent: '#2a2f36',
    accentBetween: '#3C434D',
    text: '#dfe8f2',
    notificationColor: '#b5002a',
};

export const lightTheme: Theme = {
    background: '#d3dce6',
    accent: '#fafafa',
    accentBetween: '#E7EBF0',
    text: '#5c728a',
    notificationColor: '#ff9c9c'
};
