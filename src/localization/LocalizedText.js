import React from 'react'
import { Trans, useTranslation } from "react-i18next";

export const LocalizedText = props => {
    const { t } = useTranslation();
    return <Trans t={t}>{props.children}</Trans>
}