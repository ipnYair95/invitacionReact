import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography } from "@mui/material";
import styles from './Ticket.module.scss';
import { HeaderTicket, TextItem } from "./components";
import { IMG } from "../../assets";
import { useTicket } from "./hooks";
import { NotFound } from "../../components";
import { SECTIONS } from "../../constants";

export const Ticket = () => {

    const { isLoading, ticket } = useTicket();

    useEffect(() => {
        AOS.init();
    }, [])

    if (isLoading) {
        return null;
    }

    if (!ticket) {
        return (
            <Box className={styles.ticket} data-aos="fade-up" id={SECTIONS.TICKET} >

                <NotFound msg="No hemos encontrado la información de tu boleto" />

            </Box>
        );
    }

    return (
        <Box className={styles.ticket} data-aos="fade-up" id={SECTIONS.TICKET}>

            <Box className={styles.contentTicket}>

                <HeaderTicket />

                <Typography className={`${styles.title} text-shadow`}> Cordial invitación para </Typography>

                <Typography className={`${styles.name} text-shadow`}> {ticket.name} </Typography>

                <Box className={styles.svgContainer} >
                    <img className={styles.svg} src={IMG.LOGO_TICKET} alt="party" />
                </Box>

                <Box className={styles.textContainer}>
                    {
                        ticket.data.map((item: any) => <TextItem key={item.label} {...item} />)
                    }
                </Box>

                <Box className={styles.circleOne} />

                <Box className={styles.circleTwo} />

            </Box>

            <hr className={styles.line} />

            <Box className={styles.barCode}>
                <img src="data:image/gif;base64,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" alt="fake-bar-code" />
            </Box>

        </Box>
    )
}
