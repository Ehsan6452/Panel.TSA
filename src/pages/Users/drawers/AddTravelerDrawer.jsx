// src/pages/Users/drawers/AddTravelerDrawer.jsx
import FormDrawerBuilder from '../../../components/FormDrawer/FormDrawerBuilder';
import { travelerDrawerConfig } from './userDrawerConfig';

export default function AddTravelerDrawer({ isOpen, onClose, onSuccess }) {
  return (
    <FormDrawerBuilder
      isOpen={isOpen}
      onClose={onClose}
      drawerConfig={travelerDrawerConfig}
      mode="add"
      onSuccess={onSuccess}
    />
  );
}