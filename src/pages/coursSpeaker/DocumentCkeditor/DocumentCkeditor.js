import React from 'react';
import  './DocumentCkeditor.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InputText from '../../../components/forms/inputs/InputText/InputText';
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputsNumber from '../../../components/forms/inputs/InputsNumber/InputsNumber';

const DocumentCkeditor = () => {

    return (
        <div className="DocumentCkeditor">
          <FormContainer>
          
            <label htmlFor="">Titre</label>
            <InputText/>
            <label htmlFor="">Temps</label>
            <InputsNumber/>
            <label htmlFor="">Contenue</label>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );

                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    
                    console.log( 'Focus.', editor );
                } }
            />
            </FormContainer>


          




        </div>


    );
}






DocumentCkeditor.propTypes = {};

DocumentCkeditor.defaultProps = {};

export default DocumentCkeditor;
