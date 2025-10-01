import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from "@mui/material";
import { useTicket } from "./hooks";
import { NotFound } from "../../components";
import { SECTIONS } from "../../constants";
import './Ticket.scss';

export const Ticket = () => {

    const { isLoading, ticket } = useTicket();

    const idBar = `INV-${new Date().getFullYear()}`

    useEffect(() => {
        AOS.init();
    }, [])

    if (isLoading) {
        return null;
    }

    if (!ticket) {
        return (
            <Box className="main-container-ticket" data-aos="fade-up" id={SECTIONS.TICKET} >

                <NotFound msg="No hemos encontrado la información de tu boleto" />

            </Box>
        );
    }

    return (
        <Box className="main-container-ticket">

            <Box className="ticket-container">
                <Box className="decoration-top"></Box>
                <Box className="decoration-top-2"></Box>

                <Box className="ticket-header">
                    <Box className="stars">
                        <Box className="star">✦</Box>
                        <Box className="star">✧</Box>
                        <Box className="star">✦</Box>
                        <Box className="star">✧</Box>
                    </Box>
                    <Box className="ornament-top">❋</Box>
                    <Box className="header-title">
                        <h1>Cordial Invitación</h1>
                        <p>Tenemos el honor de invitarle a nuestro evento especial</p>
                    </Box>
                </Box>

                <Box className="wave-Boxider"></Box>

                <Box className="ticket-main">
                    <Box className="circle-left"></Box>
                    <Box className="circle-right"></Box>

                    <Box className="info-section">
                        <Box className="info-label">Invitado / Familia</Box>
                        <Box className="info-box">
                            <Box className="info-value">{ticket.name}</Box>
                        </Box>
                    </Box>

                    <Box className="Boxider-ornament">✦ ❋ ✦</Box>

                    <Box className="details-grid">

                        <Box className="detail-item">
                            <Box className="detail-label">Boletos</Box>
                            <Box className="detail-value">{ticket.quantity}</Box>
                        </Box>

                        <Box className="detail-item">
                            <Box className="detail-label">Mesa</Box>
                            <Box className="detail-value">A12-A15</Box>
                        </Box>

                    </Box>

                    <Box className="barcode">
                        <Box className="barcode-lines">
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                            <Box className="barcode-line"></Box>
                        </Box>
                        <Box className="barcode-number">{idBar}</Box>
                    </Box>
                </Box>
 
            </Box>

        </Box>
    )
}
