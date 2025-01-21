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

                <Typography className={`${styles.name} text-shadow`}> {ticket.name} </Typography>

                <Box className={styles.svgContainer} >
                    <img className={styles.svg} src={IMG.PARTY_SVG} alt="party" />
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
