import Layout from '../../../components/Layout';
import IndicatorPageView from '../../../components/IndicatorPageView';

export default function IndicatorPage() {
  return <IndicatorPageView />;
}

IndicatorPage.getLayout = function getLayout(page: React.ReactChildren) {
  return <Layout>{page}</Layout>;
};
