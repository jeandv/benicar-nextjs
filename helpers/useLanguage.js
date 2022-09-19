import { useRouter } from 'next/router';
import { Spanish } from '../lang/es';
import { English } from '../lang/en';
import { useMemo } from 'react';

export const useLanguage = () => {

    const { locale } = useRouter();

    const selectedLanguage = useMemo(() => {

        if (locale === "en") return English;

        return Spanish;

    }, [locale]);

    return { selectedLanguage };
}
