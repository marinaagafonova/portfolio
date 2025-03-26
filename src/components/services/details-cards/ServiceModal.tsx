import { Modal } from "antd";
import { modalTitles, ServicesTypes } from "../../../constants";
import { PiterJsSpeech } from "./PiterJsSpeech";
import './service-modal.css';
import { ITConfSpeech } from './ITConf'

const { piterJsSpeech, iTConfSpeech } = ServicesTypes; 

type TProps = {
    isModalOpened: boolean;
    modalType: ServicesTypes;
    onClose: () => void;
}

export const ServiceModal: React.FC<TProps> = ({ isModalOpened, modalType, onClose }) => {

    const getContent = (): React.ReactNode => {
        switch (modalType) {
            case piterJsSpeech:
                return <PiterJsSpeech/>;
            case iTConfSpeech:
                return <ITConfSpeech/>;
            default:
                return <></>;
        }
    }

    return <Modal className="service-modal" footer={<></>} open={isModalOpened} onCancel={() => onClose()} onClose={() => onClose()} title={modalTitles[modalType]}>
        {getContent()}
    </Modal>;
}