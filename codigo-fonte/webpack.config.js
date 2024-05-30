const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        solicitacaoAgendamento: './src/SolicitacaoAgendamento/index.js',
        paginaInicial: './src/paginaInicial/index.js',
        cadastroClientes: './src/Cadastroclientes/index.js',
        visualizacaoPainelServicosAgendados: './src/Visualização_Painel_Serviços_Agendados/index.js',
        tratamentoSolicitacao: './src/TratamentoSolicitacao/index.js',
        listagemSolicitacoes: './src/ListagemSolicitacoes/index.js',
        listagemSuporte: './src/ListagemSuporte/index.js',
        novoAgendamento: './src/NovoAgendamento/index.js',
        tratamentoSuporte: './src/TratamentoSuporte/index.js',
        cadastroServicos: './src/CadastroServicos/index.js',
        cadastroPromocoes: './src/CadastroPromocoes/cadastroPromocoes.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            staticOptions: {
                index: 'paginaInicial/paginaInicial.html'
            }
        },
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: '/paginaInicial/paginaInicial.html'
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/svg',
                    },
                }],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/fonts/'
                    }
                  }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'Imagens',
                        },
                    },
            ]}
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: ({ chunk }) => {
            return `${chunk.name}/${chunk.name}.js`;
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/SolicitacaoAgendamento/index.html',
            filename: 'solicitacaoAgendamento/SolicitacaoAgendamento.html',
            chunks: ['solicitacaoAgendamento'],
        }),
        new HtmlWebpackPlugin({
            template: './src/paginaInicial/index.html',
            filename: 'paginaInicial/paginaInicial.html', 
            chunks: ['paginaInicial'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/Cadastroclientes/index.html',
            filename: 'cadastroClientes/CadastroClientes.html', 
            chunks: ['cadastroClientes'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/Visualização_Painel_Serviços_Agendados/index.html',
            filename: 'visualizacaoPainelServicosAgendados/visualizacaoPainelServicosAgendados.html', 
            chunks: ['visualizacaoPainelServicosAgendados'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/TratamentoSolicitacao/index.html',
            filename: 'tratamentoSolicitacao/tratamentoSolicitacao.html', 
            chunks: ['tratamentoSolicitacao'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/ListagemSolicitacoes/index.html',
            filename: 'listagemSolicitacoes/listagemSolicitacoes.html', 
            chunks: ['listagemSolicitacoes'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/ListagemSuporte/index.html',
            filename: 'listagemSuporte/listagemSuporte.html', 
            chunks: ['listagemSuporte'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/NovoAgendamento/index.html',
            filename: 'novoAgendamento/novoAgendamento.html', 
            chunks: ['novoAgendamento'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/TratamentoSuporte/index.html',
            filename: 'tratamentoSuporte/tratamentoSuporte.html', 
            chunks: ['tratamentoSuporte'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/CadastroServicos/CadastroServicos.html',
            filename: 'CadastroServicos/CadastroServicos.html', 
            chunks: ['cadastroServicos'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/CadastroPromocoes/CadastroPromocoes.html',
            filename: 'CadastroPromocoes/CadastroPromocoes.html', 
            chunks: ['cadastroPromocoes'], 
        })
    ],
}
