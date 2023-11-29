import type { ReactNode } from "react";
import Header from "./Header";
import { BiCheck } from "react-icons/bi/index";
import { BsFillCheckCircleFill } from "react-icons/bs/index";

const Th = ({ children }: { children: ReactNode }) => {
  return <th className="bg-base-100 text-lg text-center">{children}</th>;
};

const Td = ({ children }: { children?: ReactNode }) => {
  return (
    <td className="whitespace-pre text-center text-2xl space-y-2">
      {children}
    </td>
  );
};

const TdFirst = ({ children }: { children?: ReactNode }) => {
  return (
    <td className="whitespace-pre text-center text-2xl space-y-2 bg-slate-200">
      {children}
    </td>
  );
};

const Function = ({ description }: { description: string }) => {
  return (
    <div className="flex space-x-4 items-center">
      <BiCheck
        fontSize={25}
        style={{
          backgroundColor: "#d3182d",
          color: "white",
          borderRadius: "50%",
          minWidth: "25px",
        }}
      />
      <p className="text-lg">{description}</p>
    </div>
  );
};

type PropsType = {
  planName: string;
  planDescription: string;
  price: string;
  functionDescription: string;
  functions: ReactNode[];
};

const PriceTable = ({
  planName,
  planDescription,
  price,
  functionDescription,
  functions,
}: PropsType) => {
  return (
    <div className="card border bg-white w-full min-w-full col-span-1 py-2">
      <div className="card-body">
        <div className="flex items-center">
          <div className="lg:flex justify-between w-full">
            <div>
              <h2 className="card-title">{planName}</h2>
              <p className="text-slate-500">{planDescription}</p>
            </div>
            <div className="flex items-end space-x-2 h-full my-5">
              <p className="text-5xl">{price}万円</p>
              <p>月あたり</p>
            </div>
          </div>
        </div>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="space-y-6">
          <div>
            <p className="text-lg">機能・サービス</p>
            <p className="text-slate-500">{functionDescription}</p>
          </div>
          <div className="space-y-4">
            {functions.map(func => {
              return func;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const CostMerit = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-white lg:px-20">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="space-y-10 py-20 w-full">
          <Header
            title="コスト削減"
            subtitle="Feature 3 - Cost Merit"
            content="AIを中心としたソリューションであるため、従来のコンサルティングサービスに比べ圧倒的に低コストになります。"
          />
          <div className="grid gap-4 lg:grid-flow-col lg:grid-cols-2">
            <PriceTable
              planName="スタータープラン"
              planDescription="海外展開を検討フェーズの企業さま向け"
              price="5"
              functionDescription="FSやニーズ検証、パートナー探しなど準備段階に必要な機能を網羅"
              functions={[
                <Function description="AIによる情報収集・独自データの学習機能" />,
                <Function description="専門家・コンサルタントへの実務依頼（5チケット）" />,
                <Function description="チャットの翻訳、要約、自動メッセージ生成" />,
                <Function description="コールドメール・広告出稿など一部の販路開拓機能" />,
              ]}
            />
            <PriceTable
              planName="エンタープライズプラン"
              planDescription="本格的に海外展開フェーズの企業さま向け"
              price="30"
              functionDescription="AI+コンサルタントのフルサポートで海外展開の成功にコミットします"
              functions={[
                <Function description="スタータープランの全ての機能" />,
                <Function description="専門家・コンサルタントへの実務依頼（30チケット）" />,
                <Function description="ローカライズオートメーション機能" />,
                <Function description="全ての販路拡大機能" />,
                <Function description="導入支援・フルカスタマーサポート" />,
                <Function description="独自情報源・APIのインテグレーション" />,
              ]}
            />
          </div>
          {false && (
            <div className="overflow-x-auto w-full border border-base-300">
              <table className="table table-lg w-full">
                <thead>
                  <tr>
                    <th className="bg-slate-200"></th>
                    <Th>初期費用</Th>
                    <Th>システム利用料</Th>
                    <Th>依頼チケット費用</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TdFirst>β版テスター</TdFirst>
                    <Td>0円</Td>
                    <Td>0円/月</Td>
                    <Td>
                      <p>5チケット</p>
                      <p>5万円/月</p>
                    </Td>
                  </tr>
                  <tr>
                    <TdFirst>β版エンタープライズ</TdFirst>
                    <Td>0円</Td>
                    <Td>40万円/月</Td>
                    <Td>
                      <p>5チケット</p>
                      <p>15万円/月</p>
                    </Td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostMerit;
