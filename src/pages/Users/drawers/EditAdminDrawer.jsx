// src/pages/Users/drawers/EditAdminDrawer.jsx
import FormDrawerBuilder from '../../../components/FormDrawer/FormDrawerBuilder';
import { adminDrawerConfig } from './userDrawerConfig';

export default function EditAdminDrawer({ isOpen, onClose, userId, onSuccess }) {
  return (
    <FormDrawerBuilder
      isOpen={isOpen}
      onClose={onClose}
      drawerConfig={adminDrawerConfig}
      mode="edit"
      entityId={userId}
      onSuccess={onSuccess}
    />
  );
}