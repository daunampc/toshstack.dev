import { BiImport } from 'react-icons/bi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import AddNewPostModal from './AddNewPostModal';

export default function AddNewPostRoot() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-xl flex items-center gap-8">
        <AddNewPostModal />
        <div className="dark:bg-dark-charcoal p-16 rounded-lg flex flex-col items-center">
          <BiImport size={38} className="dark:text-slate-200" />
          <div className="font-medium dark:text-slate-200 text-center">
            Import post file
          </div>
        </div>
      </div>
    </div>
  );
}
