function beforeSendData(customFields,customFacts){
    customFields[0] = hAPI.getCardValue('txt_DataSolicita');
    customFields[1] = hAPI.getCardValue('txt_objetoContratacao');
    customFields[2] = hAPI.getCardValue('txt_modalidade');
    customFields[3] = hAPI.getCardValue('txt_dataInicio');
    customFields[4] = hAPI.getCardValue('txt_dataTermino');
    customFields[5] = hAPI.getCardValue('txt_dataAprovDirex');
}
