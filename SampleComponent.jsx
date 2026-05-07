// src/components/products/ProductCard.jsx

import { useLang } from '../../utils/LangHandler';
import { usePermission } from '../../utils/PermissionHandler';

export default function ProductCard({ product, onEdit, onDelete }) {
  const { lang } = useLang();
  const { can } = usePermission();

  return (
    <div className="card">
      <h3>{product.name}</h3><div className="actions">
        {can('products.edit') && (
          <button onClick={() => onEdit(product.id)}>
            {lang('common.edit')}
          </button>
        )}
        
        {can('products.delete') && (
          <button onClick={() => onDelete(product.id)}>
            {lang('common.delete')}
          </button>
        )}
      </div>
    </div>
  );
}

// 1- Translate 
// {
//   products: {
//     title: 'محصولات'
//     addNew: 'افزودن محصول'
//     list: 'لیست محصولات'
//     edit: 'ویرایش محصول'
//     delete: 'حذف محصول'
//     confirmDelete: 'آیا مطمئن هستید؟'
//   }
// }


// 2- Permissions
// {
//   superAdmin: {
//     products: { view: true, create: true, edit: true, delete: true }
//   },
//   editor: {
//     products: { view: true, create: true, edit: true, delete: false }
//   },
//   viewer: {
//     products: { view: true, create: false, edit: false, delete: false }
//   }
// }