import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { DATABASE, IDataBase } from '../../../constants';

export const useTicket = () => {

    const [searchParams] = useSearchParams();

    const [isLoading, setIsLoading] = useState(true);

    const [ticket, setTicket] = useState<any>(null);

    useEffect(() => {

        initializeTicket();

    }, [searchParams])

    const initializeTicket = () => {

        try {

            setIsLoading(true);

            const query = atob(searchParams.get('ticket') || '');

            const id = extractId(query);

            const data = DATABASE.find((item) => item.id === id);

            const normalizedData = normalizeData(data);

            setTicket(normalizedData);

            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
        }

    }

    const extractId = (query: string) => {

        return +query.split('-')[0];

    }

    const normalizeData = (data: IDataBase | undefined) => {

        if (!data) {
            return null;
        }

        return {
            name: data.name,
            data: [
                { label: "Personas", value: data.quantity },
                { label: "Fecha", value: '15/02/2025' }
            ]
        }

    }

    return {
        isLoading,
        ticket
    }
}
