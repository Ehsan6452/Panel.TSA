// src/pages/Users/drawers/EditTravelerDrawer.jsx
import FormDrawerBuilder from '../../../components/FormDrawer/FormDrawerBuilder';
import { travelerDrawerConfig } from './userDrawerConfig';

export default function EditTravelerDrawer({ isOpen, onClose, userId, onSuccess }) {
  return (
    <FormDrawerBuilder
      isOpen={isOpen}
      onClose={onClose}
      drawerConfig={travelerDrawerConfig}
      mode="edit"
      entityId={userId}
      onSuccess={onSuccess}
    />
  );
}