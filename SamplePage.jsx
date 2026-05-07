// src/pages/ProductsPage.jsx

import { useLang } from '../utils/LangHandler';
import { usePermission } from '../utils/PermissionHandler';
import { useNavigate } from 'react-router-dom';

export default function ProductsPage() {
  const { lang } = useLang();
  const { getSection } = usePermission();
  const navigate = useNavigate();
  
  const perms = getSection('products');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{lang('products.title')}</h1>
        {perms.create && (
          <button onClick={() => navigate('/products/add')}>
            {lang('products.addNew')}
          </button>
        )}
      </div>

      <div className="page-content">
        {/* محتوا */}
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


// 3- Route in App.jsx
// <Route path="/products">
//  <Route index element={<ProtectedRoute page="products"><ProductsPage /></ProtectedRoute>} />
//    <Route path="add" element={<ProtectedRoute page="products.create"><AddProductPage /></ProtectedRoute>} />
//    <Route path=":id/edit" element={<ProtectedRoute page="products.edit"><EditProductPage /></ProtectedRoute>} />
// </Route> 


// 4- SideBar Config 
// [
//   {
//     title: 'products.title',
//     path: '/products',
//     icon: '📦',
//     permission: 'products',
//     children: [
//       { title: 'products.list', path: '/products', permission: 'products.view' },
//       { title: 'products.addNew', path: '/products/add', permission: 'products.create' }
//     ]
//   }
// ]