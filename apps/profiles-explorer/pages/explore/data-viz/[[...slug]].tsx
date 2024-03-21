import Layout from '../../../components/Layout';
import DataVizPageView from '../../../components/DataVizPageView';

export default function DataVizPage() {
  return <DataVizPageView />;
}

DataVizPage.getLayout = function getLayout(page: React.ReactChildren) {
  return <Layout>{page}</Layout>;
};
