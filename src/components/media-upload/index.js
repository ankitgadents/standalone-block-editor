import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'audio' ];

function MyMediaUploader() {
  return (
    <MediaUpload
  onSelect={ ( media ) => console.log( 'selected ' + media.length ) }
  allowedTypes={ ALLOWED_MEDIA_TYPES }
  value={ mediaId }
  render={ ( { open } ) => (
  <Button onClick={ open }>
    Open Media Library
  </Button>
) }
  />
);
}

export default MyMediaUploader;
