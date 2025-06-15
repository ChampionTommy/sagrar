import { Hello } from '@/lib/component/hello';
import { Video } from '@/lib/component/video';
import { Popular } from '@/lib/component/popular';
import { NewsCardGrid } from '@/lib/component/newsCardGrid';

export default function Page() {
  return (
    <>
      <Video />
      <Hello />
      <Popular />
      <NewsCardGrid/>
    </>
  );
}
