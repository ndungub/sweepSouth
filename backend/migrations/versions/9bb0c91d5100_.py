"""empty message

Revision ID: 9bb0c91d5100
Revises: 7f8297cdaa7f
Create Date: 2021-11-10 20:28:25.261066

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9bb0c91d5100'
down_revision = '7f8297cdaa7f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tb_quote',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('region', sa.String(length=10), nullable=True),
    sa.Column('lang', sa.String(length=10), nullable=True),
    sa.Column('symbols', sa.String(length=100), nullable=True),
    sa.Column('results', sa.JSON(), nullable=True),
    sa.Column('error', sa.String(length=200), nullable=True),
    sa.Column('createdby', sa.Integer(), nullable=False),
    sa.Column('createdon', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('editedon', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['createdby'], ['tb_users.userid'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_tb_quote_createdby'), 'tb_quote', ['createdby'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_tb_quote_createdby'), table_name='tb_quote')
    op.drop_table('tb_quote')
    # ### end Alembic commands ###
