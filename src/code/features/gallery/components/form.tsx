// 'use client';
// import { useState } from 'react';
// import { Button, Text, TextField } from '@/code/common/components';
// import { useGalleryEdit } from '../state/state.all';
// import { DownloadIcon } from '@radix-ui/react-icons';
// import axios from 'axios';

// type resultprops = { data: string | string[]; success: boolean };
// function GalleryImageForm() {
//   const [statusText, setStatus] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const [error, setError] = useState<boolean>(false);
//   const active = useGalleryEdit((s) => s.active);
//   const action = useGalleryEdit((s) => s.formAction);
//   const getCodeA = useGalleryEdit((s) => s.getCode);

//   const getCode = (name: string) => {
//     if (loading) return;
//     setLoading(true);
//     axios
//       .get('/api', { params: { type: active } })
//       .then((result) => {
//         handleResult(result.data);
//         setError(false);
//         setLoading(false);
//         setSuccess(true);
//       })
//       .catch((eror) => {
//         setLoading(false);
//         setSuccess(false);
//         setError(true);
//         setStatus('Error occured');
//       })
//       .finally(() => {
//         setTimeout(() => {
//           setLoading(false);
//           setError(false);
//           setSuccess(false);
//           setStatus('');
//         }, 4000);
//       });
//   };
//   function handleResult({ data, success }: resultprops) {
//     if (success) {
//       if (!Array.isArray(data)) return;
//       getCodeA(data);
//     } else {
//       if (typeof data === 'string') {
//         setStatus(data);
//       }
//     }
//   }
//   const buttonText = loading
//     ? 'loading'
//     : error
//       ? 'Error'
//       : success
//         ? 'success'
//         : 'Get Code';

//   return (
//     <div>
//       <div className="mx-auto max-w-screen-sm rounded-md border bg-white p-4 shadow-md">
//         <Text type="h_xl_m_p" align={'center'}>
//           Get Updated Gallery Code
//         </Text>
//         <div className="h-5" />
//         <div className="flex flex-row items-start gap-3">
//           <Text type="p_bo_m_p">Status :</Text>
//           <Text type="p_bo_m_p">{statusText}</Text>
//         </div>
//         <div className="h-5" />

//         <div className="flex flex-row items-center justify-between">
//           <Button className="py-2" ping={action} name="cancel">
//             Cancel
//           </Button>
//           <Button className="py-2" ping={getCode} name="save">
//             <DownloadIcon />
//             {buttonText}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default GalleryImageForm;
