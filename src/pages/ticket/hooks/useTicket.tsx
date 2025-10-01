import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { DATABASE, IDataBase } from '../../../constants';

export const useTicket = () => {

    const [searchParams] = useSearchParams();

    const [isLoading, setIsLoading] = useState(true);

    const [ticket, setTicket] = useState<IDataBase | null>(null);

    useEffect(() => {

        initializeTicket();

    }, [searchParams])

    const initializeTicket = () => {

        try {

            setIsLoading(true);

            const query = atob(searchParams.get('ticket') || '');

            const id = extractId(query);

            const data = DATABASE.find((item) => item.id === id) || null;

            setTicket(data);

            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
        }

    }

    const extractId = (query: string) => {

        return +query.split('-')[0];

    }

    return {
        isLoading,
        ticket
    }
}
