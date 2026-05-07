// src/pages/Users/drawers/AddAdminDrawer.jsx
import FormDrawerBuilder from '../../../components/FormDrawer/FormDrawerBuilder';
import { adminDrawerConfig } from './userDrawerConfig';

export default function AddAdminDrawer({ isOpen, onClose, onSuccess }) {
  return (
    <FormDrawerBuilder
      isOpen={isOpen}
      onClose={onClose}
      drawerConfig={adminDrawerConfig}
      mode="add"
      onSuccess={onSuccess}
    />
  );
}