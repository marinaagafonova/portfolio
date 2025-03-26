export enum ServicesTypes {
    piterJsSpeech = 'piterjsspeech',
    iTConfSpeech = 'itconfspeech',
}

type TMap = {
    [P in ServicesTypes]: string;
}

export const modalTitles: TMap = {
    [ServicesTypes.piterJsSpeech]: 'PiterJS speech',
    [ServicesTypes.iTConfSpeech]: 'ITConf speech',

}