import { Modal, Text } from 'react-native'
import React, { useState } from 'react'
import AddButton from './AddButton'
import MovieForm from './AuthentificationForm'

export default function MovieModal(props) {

    const [title, setTitle] = useState('')
    const [synopsis, setSynopsis] = useState('')
    function onSubmit() {
        console.log(title, synopsis);
        props.onClose()
        setSynopsis('')
        setTitle('')
    }
    return (

        <Modal visible={props.isVisible}>
            <MovieForm title={title} synopsis={synopsis} setTitle={setTitle} setSynopsis={newSynopsis => setSynopsis(newSynopsis)} />
            <AddButton content='Fermer' action={props.onClose} />
            <AddButton content='Valider' action={onSubmit} />

        </Modal>

    )
}